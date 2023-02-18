#!/bin/bash

TOKEN="00ebcc7dc5bd2de8d6773664e0a70a4d8a7166c1a896cf69b957155ec9ad2933"

function get_users {
  local all_users=()
  local page_nb=1
  while true; do
    local response=$(curl -s -H "Authorization: Bearer $TOKEN" "https://api.intra.42.fr/v2/campus/43/users?per_page=100&page=$page_nb")
    local users=($(echo "$response" | jq -r '.[] | .login'))
    if [ ${#users[@]} -eq 0 ]; then
      break
    fi
    all_users+=("${users[@]}")
    ((page_nb++))
  done
  echo "${all_users[@]}"
}

function get_all_info {
  local users=($@)
  local all_users=()
  local count=0
  for user in "${users[@]}"; do
    local response=$(curl -s -H "Authorization: Bearer $TOKEN" "https://api.intra.42.fr/v2/users/$user")
    all_users+=("$response")
    ((count++))
    echo "Processed $count users." > counter.txt
    echo "$response" > "pretty/$user.json"
    jq '.' ./pretty/$user.json > ./users/$user.json
    if [ $count -eq 750 ]; then
      TOKEN="f9d7fce86f191695fbdc7b5f126c83e67ed6fcf420810eb40a60ed5a40d7442e"
    fi
    sleep 1
  done
  echo "${all_users[@]}"
}

USERS=$(get_users)
ALL_INFO=$(get_all_info "${USERS[@]}")

echo "$ALL_INFO" > all_info.json

sleep(2)

jq '.' all_info.json > users.json

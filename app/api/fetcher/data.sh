#!/bin/bash

TOKEN="204e1d173d04362530f794194e651a976dbbbac647ee564b7409eb8252bbd20f"

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
    echo "$response" > "user.json"
    if [ $count -eq 750 ]; then
      TOKEN="d41fa9778a771a3e9e77ead7aa73769e9585527716c5cd591dfaf2b21e045fbf"
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

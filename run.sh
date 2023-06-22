#!/bin/bash

# Get the current directory
current_dir=$(pwd)

export PORT_CLIENT=3001
export PORT_SERVER=3002

# Command to run run.sh in a new terminal for the client
osascript -e "tell application \"Terminal\" to do script \"cd $current_dir/client/ && bash client.sh\""

# Delay for 2 seconds
sleep 2

# Command to run run.sh in a new terminal for the server
osascript -e "tell application \"Terminal\" to do script \"cd $current_dir/server/ && bash server.sh\""


cleanup() {
  # Unset the exported variables
  unset PORT_CLIENT
  unset PORT_SERVER

  # Exit the script
  exit 1
}

# Set up the trap to execute the cleanup function on SIGINT signal (Ctrl+C)
trap cleanup SIGINT

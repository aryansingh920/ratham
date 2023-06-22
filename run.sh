#!/bin/bash

# Get the current directory
current_dir=$(pwd)

export PORT_CLIENT=3001
export PORT_SERVER=3002

# Command to run run.sh in a new terminal
osascript -e "tell application \"Terminal\" to do script \"cd $current_dir/client/ && bash run.sh\""

# Command to run another run.sh in a new terminal
osascript -e "tell application \"Terminal\" to do script \"cd $current_dir/server/ && bash run.sh\""

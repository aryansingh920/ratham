#!/bin/bash

# Delete the existing /node_modules directory
rm -rf /node_modules

# x# Find the process ID (PID) using the specified port
port=$PORT_CLIENT
pid=$(lsof -i :$port -t)

# Kill the process using the PID
if [ -n "$pid" ]; then
  echo "Killing process running on port $port"
  kill $pid
fi


# Install dependencies
npm install

# Set the environment variable and start the server
PORT=3001 npm start


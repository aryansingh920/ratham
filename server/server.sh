rm -rf /node_modules

# Find the process ID (PID) using the specified port
port=$PORT_SERVER
pid=$(lsof -i :$port -t)

# Kill the process using the PID
if [ -n "$pid" ]; then
  echo "Killing process running on port $port"
  kill $pid
fi


export PORT=$PORT_SERVER
export key="0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef"

npm install
npm run dev

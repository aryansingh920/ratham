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
export key=g3noi4gio3refcniov990rgoigr9w9wgrfw9oo

npm install
npm run dev
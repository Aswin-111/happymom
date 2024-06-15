pm2 stop "happymom-server"
pm2 delete "happymom-server"
pm2 save
rm -rf happymom
git clone https://github.com/nidheeshkn/happymom.git
cd happymom
npm i
pm2 start npm --name "happymom-server" -- start
pm2 save
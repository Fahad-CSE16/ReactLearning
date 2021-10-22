# step 1 install node and npm

```
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
sudo n latest
sudo apt-get install --reinstall nodejs-legacy
```

### step2 uninstall create-react-app and install yarn

```
npm uninstall -g create-react-app

npm i -g yarn

yarn global remove create-react-app
```

### Create React APP

```
npx create-react-app myreact
```



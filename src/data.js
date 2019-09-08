const fs = require('fs')
const path = require('path')

const DataFolderPath = path.join(__dirname, 'json')

const accountData = fs.readFileSync(path.join(DataFolderPath, 'accounts.json'), 'utf8')
const accounts = JSON.parse(accountData)

const userData = fs.readFileSync(path.join(DataFolderPath, 'users.json'), 'utf8')
const users = JSON.parse(userData)

const writeJSON = () => {
    const accountsJSON = JSON.stringify(accounts, null, 4);
    fs.writeFileSync(path.join(DataFolderPath, 'accounts.json'), accountsJSON, 'utf8');
}

module.exports = {
    accounts, 
    users,
    writeJSON
}
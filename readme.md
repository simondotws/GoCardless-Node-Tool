# Gocardless Node Yargs Tool

A simple command line tool to make API requests to the GoCardless platform using their Node-JS library.

## Installation

Clone the GitHub project using:

```bash
git clone https://github.com/s1xro/gocardless-node-tool.git
```

Run npm install:

```bash
npm install
```

Create a .env file with your GoCardless access token:

```bash
GC_ACCESS_TOKEN=yourAccessToken
```

Run npm start:

```bash
npm start
```

## Usage

```python
node app.js --getPayment id="gocardlessPaymentId"
```

```python
node app.js --help
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
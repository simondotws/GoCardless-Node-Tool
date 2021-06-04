const yargs = require('yargs')
const utils = require('./utils/utils.js')

if (!process.env.GC_ACCESS_TOKEN) {
    console.log('Make sure you define your access token in .env file!')
    process.exit()
}

//Create getPayment Status Command
yargs.command({
    command: 'getPayment',
    describe: 'Get current status for payment ID',
    builder: {
        id: {
            describe: 'Payment ID',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        utils.getPayment(argv.id)
    }
})

//Create createPayment Status Command
yargs.command({
    command: 'createPayment',
    describe: 'Processes a new payment',
    builder: {
        mandate: {
            describe: 'Mandate ID',
            demandOption: true,
            type: 'string'
        },
        amount: {
            describe: 'Payment amount',
            demandOption: true,
            type: 'string'
        },
        currency: {
            describe: 'Payment currency',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        utils.createPayment(argv.mandate, argv.amount, argv.currency)
    }
})

// Create listPayments Command
yargs.command({
    command: 'listPayments',
    describe: 'Lists the last 5 payment IDs',
    handler(argv) {
        utils.listPayments()
    }
})

// Create createCustomer Command
yargs.command({
    command: 'createCustomer',
    describe: 'Creates customer object',
    handler(argv) {
        utils.createCustomer()
    }
})

//Create createCustomerBankAccount Status Command
yargs.command({
    command: 'createCustomerBankAccount',
    describe: 'Add a bank account',
    builder: {
        customer: {
            describe: 'Customer ID',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        utils.createCustomerBankAccount(argv.customer)
    }
})

//Create createMandate Status Command
yargs.command({
    command: 'createMandate',
    describe: 'Add a mandate',
    builder: {
        bankAccount: {
            describe: 'Bank Account ID',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        utils.createMandate(argv.bankAccount)
    }
})


yargs.parse()
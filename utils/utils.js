require('dotenv').config()
const gocardless = require('gocardless-nodejs')
const constants = require('gocardless-nodejs/constants')
const { v4: uuidv4 } = require('uuid')
const chalk = require('chalk')

// Get Payment Status Function
const getPayment = (id) => {
    const client = getClient()

    client.payments.find(id).then(result => {
        console.log(chalk.green.inverse(result.status))
    }).catch(error => {
        console.log(chalk.red.inverse('Error: ' + error.message))
    })
}

// Create Payment Function
const createPayment = (mandate, amount, currency) => {
    const client = getClient()

    client.payments.create(
        {
            amount,
            currency,
            links: {
                mandate
            }
        },
    ).then(result => {
        console.log(chalk.green.inverse(result.id))
    }).catch(error => {
        console.log(chalk.red.inverse(error.message))
    })

}

// Create List Payments Function
const listPayments = () => {
    const client = getClient()

    client.payments.list({
        
        created_at: {
            gt: "2021-02-09T17:01:06.000Z"
        
        },
        
           
        
    }).then(result => {
        result.payments.forEach((payment) => {
            console.log(chalk.green.inverse(payment.id))
        })
    }).catch(error => {
        console.log(chalk.red.inverse(error.message))
    })
}

// Create createCustomer Function
const createCustomer = () => {
    const client = getClient()
//
    client.customers.create(
        {
            email: 'none@example.com',
            given_name: 'Successful',
            family_name: 'Node',
            address_line1: '65 Goswell Road',
            city: 'London',
            postal_code: 'EC1V 7EN',
            country_code: 'GB'
        },
    ).then(result => {
        console.log(chalk.green.inverse(result.id))
    }).catch(error => {
        console.log(chalk.red.inverse(error.message))
    })

}

// Create createCustomerBankAccount Function


const createCustomerBankAccount = (customer, iban, account_holder_name, country_code) => {
    const client = getClient()

    client.customerBankAccounts.create(
        {
            iban,
            account_holder_name,
            country_code,
            links: {
                customer
            }
        },
    ).then(result => {
        console.log(chalk.green.inverse(result.id))
    }).catch(error => {
        console.log(chalk.red.inverse(error.message))
    })

}


// Create createMandate Function
const createMandate = (bankAccount) => {
    const client = getClient()

    client.mandates.create(
        {
            scheme: 'sepa_core',
            links: {
                customer_bank_account: bankAccount
            }
        },
    ).then(result => {
        console.log(chalk.green.inverse(result.id))
    }).catch(error => {
        console.log(chalk.red.inverse(error.message))
    })

}


// Create Client
const getClient = () => {
    return gocardless(
        process.env.GC_ACCESS_TOKEN,
        constants.Environments.Sandbox,
        { raiseOnIdempotencyConflict: true },
    )
}

// Create Exports DECLARE FUNCTIONS
module.exports = {
    getPayment: getPayment,
    createPayment: createPayment,
    listPayments: listPayments,
    createCustomer: createCustomer,
    createCustomerBankAccount: createCustomerBankAccount,
    createMandate: createMandate
}

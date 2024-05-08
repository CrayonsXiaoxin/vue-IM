const Mock = require('mockjs')

const data = Mock.mock({
  'items|30': [
    {
      "domain": "example.com",
      "group": "Group A",
      "country": "USA",
      "domainStatus": "Active",
      "responsiblePerson": "John Doe",
      "adminAccount": "admin",
      "adminPassword": "admin123",
      "upTime": "2024-04-15 08:00:00",
      "database": "MySQL",
      "databasePassword": "dbpass123",
      "aid": "123456",
      "email": "john@example.com",
      "emailPassword": "emailpass123",
      "googleAnalytics": "UA-123456-1",
      "title": "Example Title",
      "description": "This is an example description",
      "industry": "Technology",
      "pageviews": 1000
    },
    {
      "domain": "test.com",
      "group": "Group B",
      "country": "UK",
      "domainStatus": "Inactive",
      "responsiblePerson": "Jane Smith",
      "adminAccount": "admin",
      "adminPassword": "admin123",
      "upTime": "2024-04-14 12:00:00",
      "database": "PostgreSQL",
      "databasePassword": "dbpass456",
      "aid": "789012",
      "email": "jane@test.com",
      "emailPassword": "testpass123",
      "googleAnalytics": "UA-789012-1",
      "title": "Test Title",
      "description": "This is a test description",
      "industry": "Finance",
      "pageviews": 500
    },
    {
      "domain": "example.org",
      "group": "Group A",
      "country": "Canada",
      "domainStatus": "Active",
      "responsiblePerson": "Michael Johnson",
      "adminAccount": "admin",
      "adminPassword": "admin123",
      "upTime": "2024-04-13 15:30:00",
      "database": "MongoDB",
      "databasePassword": "dbpass789",
      "aid": "345678",
      "email": "michael@example.org",
      "emailPassword": "examplepass123",
      "googleAnalytics": "UA-345678-1",
      "title": "Another Title",
      "description": "Another description",
      "industry": "Education",
      "pageviews": 800
    }
  ]
})

module.exports = [
  {
    url: '/vue/table/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]

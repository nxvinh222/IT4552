# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Shop.create!(
    shop_name:  "Peak Sword",
    shop_address: "So 5 Atlantis",
    manager_name: "Zues",
    manager_phone: "012345",
    hotline: "09876"
)

Item.create!(
    item_name: "Long Sword",
    price: "1000",
    description: "Strong long sword made by black steel."
)

ItemQuantity.create!(
    shop_id: 1,
    item_id: 1,
    quantity: 10
)

Employee.create!(
    shop_id: 1,
    name: "Nam",
    phone: "123",
    id_card: "567",
    role: "maid"
)

Revenue.create!(
    shop_id: 1,
    item_id: 1,
    quantity: 59
)
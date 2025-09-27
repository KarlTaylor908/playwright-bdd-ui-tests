Feature: Add Product to Basket and Increase Quantity

Background: 
        Given I am on the homepage
        When I Accept Cookies
        
Scenario: Add a searched product to the basket and set quantity to 3
    When I navigate to Products page
    And I search for "Men Tshirt"
    And I View Product
    And I add '3' products
    And I add product to Cart
    And I navigate to Cart
    Then I should see the "Men Tshirt" product
    And I see the total is now "Rs. 1200"
    And I see the quantity is '3'
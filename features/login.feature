Feature: User Authentication

  Scenario: User is able to login via RE app
    Given I click "More" on the navigation tab
    When I click on "Login / Sign up" button
    And login with "office@teamlewis.co.nz" and "changeme1"
    Then I should see the user's name - "Deb" on the screen and the "Edit Profile" button

  Scenario: User is able to logout
    Given I click "More" on the navigation tab
    When I click on "Edit Profile" button
    And I click on Log out
    Then I should see the user's name - "Hello guest!" on the screen and the "Login / Sign up" button

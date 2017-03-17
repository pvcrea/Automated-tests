Feature: Article feature
  As a visitor of the website
  I want to be able to visit the article page.
  So that I can view the chosen article.

  Background:
    Given I am on your website

  Scenario: Viewing an article page.
    When I go to the frontpage
    Then I click on an article
    And I should see "your variable" as the page title
    And I should see the following text "your variable"
    Then I should see the following text "your variable"
    And I should see the following text "your variable"
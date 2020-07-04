@smoke
Feature: Our Work Title
@work
Scenario: page title
  Given I open "https://www.epam.com/" url
  When I click "OUR WORK" link
  Then Current page title should be "Our Work"
  
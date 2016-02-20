#!/bin/bash
# Remove and remove some Meteor packages to work.

 meteor remove blaze-html-templates
echo "blaze-html-templates - REMOVED"

meteor remove ecmascript
echo "ecmascript - REMOVED"

meteor remove insecure
echo "insecure - REMOVED"

meteor remove autopublish
echo "autopublish - REMOVED"

meteor remove twbs:bootstrap
echo "bootstrap - REMOVED"

echo "******************"

meteor add angular
echo "angular - ADDED"

meteor add dotansimha:accounts-ui-angular
echo "accounts-ui-angular - ADDED"

meteor add urigo:angular-ui-router
echo "angular-ui-router - ADDED"

meteor add accounts-password
echo "accounts-password - ADDED"

meteor add angular:angular-material
echo "angular-material - ADDED"

meteor add planettraining:material-design-icons
echo "material-design-icons - ADDED"


echo "****FINISH****"

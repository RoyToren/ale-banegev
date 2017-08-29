'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
    module('userDetail').
    component('userDetail', {
        templateUrl: 'userDetail/userDetail.html',
        controller: ['$scope','Users','$routeParams',
            function UserDetailController($scope,Users,$routeParams) {
                Users.getUser($routeParams.phoneId).then(function (data) {
                                $scope.User = data.data;
                });
                $scope.steps = [
                    'שלב 4: תחומי עניין',
                    'שלב 3: סיכונים',
                    'שלב 2: יכולות',
                    'שלב 1: נתונים כללים',
                ];
                $scope.AddRisk = function (RiskData) {
                    if ($scope.User.risks == null) {
                        $scope.User.risks = [];
                    }
                    $scope.User.risks.push(angular.copy(RiskData));
                    RiskData.name= "";
                    RiskData.prevention = "";
                }
                $scope.createUser = function () {
                    if($scope.User && $scope.User.id && $scope.User.id != null)
                    {
                Users.createUser($scope.User).then(function (data) {
                                $scope.User = {
                    id : ""
                 };
                });
                $scope.selection = $scope.steps[0];
                    }
                    else
                    {
                        window.alert("אנא הכנס תעודה מזהה");
                    }
                }
                $scope.selection = $scope.steps[3];

                $scope.getCurrentStepIndex = function () {
                    // Get the index of the current step given selection
                    return _.indexOf($scope.steps, $scope.selection);
                };

                // Go to a defined step index
                $scope.goToStep = function (index) {
                    if (!_.isUndefined($scope.steps[index])) {
                        $scope.selection = $scope.steps[index];
                    }
                };

                $scope.hasNextStep = function () {
                    var stepIndex = $scope.getCurrentStepIndex();
                    var nextStep = stepIndex + 1;
                    // Return true if there is a next step, false if not
                    return !_.isUndefined($scope.steps[nextStep]);
                };

                $scope.hasPreviousStep = function () {
                    var stepIndex = $scope.getCurrentStepIndex();
                    var previousStep = stepIndex - 1;
                    // Return true if there is a next step, false if not
                    return !_.isUndefined($scope.steps[previousStep]);
                };

                $scope.incrementStep = function () {
                    if ($scope.hasNextStep()) {
                        var stepIndex = $scope.getCurrentStepIndex();
                        var nextStep = stepIndex + 1;
                        $scope.selection = $scope.steps[nextStep];
                    }
                };

                $scope.decrementStep = function () {
                    if ($scope.hasPreviousStep()) {
                        var stepIndex = $scope.getCurrentStepIndex();
                        var previousStep = stepIndex - 1;
                        $scope.selection = $scope.steps[previousStep];
                    }
                };
            }
        ]
    });
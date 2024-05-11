function skillsMember() {
    return {
        restrict: 'E',
        templateURL:'modules/skills/views/members.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }

    };
}
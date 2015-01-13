app.controller('Main', function($scope, $sce) {
	var data = [],
		classArray = []
		styleArray = [];

	var firstChar = {
		name: 'Valoris',
		type: 'Barbarian',
		pictureUrl: 'http://stuffershack.com/wp-content/uploads/2013/02/barbarian1.jpg',
		style: 'Mele',
		skills: [{
			name: 'Slam',
			effect: '230 HP Damage',
			cooldown: '5s'
		}, {
			name: 'Hammer',
			effect: '380 HP Damage',
			cooldown: '10s'
		}]
	};

	var secondChar = {
		name: 'Brom',
		type: 'Templar',
		pictureUrl: 'http://dragonmountbooks.files.wordpress.com/2012/07/cavaleiro-templario.jpg',
		style: 'Mele',
		skills: [{
			name: 'Heal',
			effect: '+150 HP Life',
			cooldown: '15s'
		}, {
			name: 'Shield Slam',
			effect: '100 Damage + Stun for 3s',
			cooldown: '5s'
		}]
	};

	var thirdChar = {
		name: 'Leona',
		type: 'Amazon',
		pictureUrl: 'http://talesfromthefireside.com/gallerynpcs/ninaran%20(0).jpg',
		style: 'Range',
		skills: [{
			name: 'Double Shot',
			effect: '410 HP Damage',
			cooldown: '15s'
		}, {
			name: 'Slow Down',
			effect: 'Slows enemy movement for 5s',
			cooldown: '8s'
		}]
	};

	data.push(firstChar);
	data.push(secondChar);
	data.push(thirdChar);
	$scope.data = data;

	$scope.makeUrl = function(url) {
		return $sce.trustAsResourceUrl(url);
	}

	var sortFunc = function(predicate) {
		return function(character) {
			if(predicate == 'type'){
				return character.type;
			}
			if(predicate == 'style'){
				return character.style;
			}
			if(predicate == 'name'){
				return character.name;
			}
		}
	}

	function makeClassList() {
        data.forEach(function(elem) {
            if (classArray.indexOf(elem.type) === -1) {
                classArray.push(elem.type);
            };
        });
    }
    makeClassList();

    function makeStyleList() {
        data.forEach(function(elem) {
            if (styleArray.indexOf(elem.style) === -1) {
                styleArray.push(elem.style);
            };
        });
    }
    makeStyleList();

    $scope.styles = styleArray;
    $scope.classes = classArray;
	$scope.sortFunc = sortFunc;

});
app.controller('Main', function($scope, $sce) {
	var data = [];

	var firstChar = {
		name: 'Valoris',
		type: 'Barbarian',
		pictureUrl: 'http://stuffershack.com/wp-content/uploads/2013/02/barbarian1.jpg',
		skills: [{
			name: 'Slam',
			damage: '230',
			cooldown: '5s'
		}, {
			name: 'Hammer',
			damage: '380',
			cooldown: '10s'
		}]
	};

	var secondChar = {
		name: 'Brom',
		type: 'Templar',
		pictureUrl: 'http://media-cache-ec0.pinimg.com/736x/14/93/e4/1493e422354d5e7ba9c73dd19b042c2f.jpg',
		skills: [{
			name: 'Heal',
			damage: '150',
			cooldown: '15s'
		}, {
			name: 'Shield Slam',
			damage: '100',
			cooldown: '5s'
		}]
	};

	data.push(firstChar);
	data.push(secondChar);
	$scope.data = data;

	$scope.makeUrl = function(url) {
		return $sce.trustAsResourceUrl(url);
	}

	var sortFunc = function(predicate) {
		return function(item) {
			if(predicate == ''){

			}
		}
	}

});
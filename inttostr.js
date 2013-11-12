(function(){

	var vocabulary = {
		0: ['',       '',            '',          ''],
		1: ['один',   '',            'сто',       'одна тысяча'],
		2: ['два',    'двадцать',    'двести',    'две тысячи'],
		3: ['три',    'тридцать',    'триста',    'три тысячи'],
		4: ['четыре', 'сорок',       'четыреста', 'четыре тысячи'],
		5: ['пять',   'пятьдесят',   'пятьсот',   'пять тысяч'],
		6: ['шесть',  'шестьдесят',  'шестьсот',  'шесть тысяч'],
		7: ['семь',   'семьдесят',   'семсот',    'семь тысяч'],
		8: ['восемь', 'восемьдесят', 'восемьсот', 'восемь тысяч'],
		9: ['девять', 'девяносто',   'девятсот',  'девять тысяч']
	};

	var vocabulary_additional = {
		0: 'десять',
		1: 'одиннадцать',
		2: 'двенадцать',
		3: 'тринадцать',
		4: 'четырнадцать',
		5: 'пятнадцать',
		6: 'шестнадцать',
		7: 'семнадцать',
		8: 'восемнадцать',
		9: 'девятнадцать'
	};

	var inttostr = function(t) {
		var k = t.toString(),
			str = '';
		if ((t < 1) || (t > 9999)) {
			console.error('Число ' + t + ' за пределами отрезка [1, 9999]');
		} else {
			var digits = k.length;
			for (var i = 1; i <= digits; i++) {
				if (typeof(k[digits - i]) !== undefined) {

					if (i === 2 && k[digits-i] === '1') {
						str = vocabulary_additional[k[digits-1]];
					}

					str = vocabulary[k[digits-i]][i-1] + ' ' + str;
					str = str.replace('  ', ' ');
				} else {
					break;
				}
			}

			console.log(str);
		}
	}

	inttostr(9907);
})()
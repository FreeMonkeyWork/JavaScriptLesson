/*
		* Крутилка умных фраз
		*/


		var finQuiz = [
				'Знаете ли вы, что крупнейший по числу активов в США банковский холдинг Bank of America создан итальянцем Амадео Джаннини как «банк для бедных» и изначально назывался Банком Италии.',
				'Знаете ли вы, что Жюль Верн, перед тем как уйти в творчество, более 5 лет проработал на Парижской бирже брокером.',
				'Знаете ли вы, что среди американских брокеров бытует примета, что динамика индекса Dow Jones находится в прямой зависимости от результатов финального матча по американскому футболу.',
				'Знаете ли вы, что фондовый рынок Китая — единственный в мире, на котором подавляющее большинство акций являются акциями государственных компаний.',
				'Знаете ли вы, что понятие «инвестиция» произошло от латинского слова, означавшего «облачать».',
				'Знаете ли вы, что первая фондовая биржа возникла в XVII в. в Амстердаме.',
				'Знаете ли вы, что национальные китайские компании, размещенные на зарубежных биржах, называются красными фишками.',
				'Знаете ли вы, что Нью-Йоркская фондовая биржа на сленге американских трейдеров называется «большое табло».',
				'Знаете ли вы, что термин «облигация» происходит от латинского oblige, что значит «обязывать».',
				'Знаете ли вы, что первой российской компанией, разместившей свои акции на Нью-Йоркской фондовой бирже, стало ОАО «ВымпелКом».',
				'Знаете ли вы, что фондовый индекс РТС начал рассчитываться с 1 сентября 1995 года со 100 пунктов.',
				'Знаете ли вы, что фамилия знаменитого суперагента 007 Джеймса Бонда в биржевой терминологии переводится как «облигация».',
				'Знаете ли вы, что кредитные карты впервые ввел в 1951 году нью-йоркский банк «Франклин Нэшнл».',
				'Знаете ли вы, что на Нью-Йоркской бирже ежегодно используется 1 миллион карандашей.',
				'Знаете ли вы, что с 1866 года законодательство США запрещает использовать на банкнотах портреты ныне здравствующих людей.',
				'Знаете ли вы, что в средневековом Китае за отказ принимать бумажные деньги полагалась смертная казнь.',
				'Знаете ли вы, что для жителей Аляски в 1847–1852 годах монетный двор в Санкт-Петербурге делал непромокаемые деньги из кожи тюленей.',
				'Знаете ли вы, что 1 миллион долларов купюрами по $ 1 весит 1000 кг.',
				'Знаете ли вы, что в 1704 году в России впервые в мире приравняли основную денежную единицу к 100 монетам.',
				'Знаете ли вы, что символ фунта — &pound; — происходит от латинского слова, которое переводится как «весы».'
		];

		var fql = finQuiz.length;


		$('.promo-168_rotation');

		var quizContent;

		var index = 0;

		quizPlus();

		function quizPlus() {
			quizContent = finQuiz[index];

			$('.promo-168_rotation-body').html(quizContent);
			index = (index + 1);
			if (index ==  fql) {
				index = 0;
			}

		}

		function quizMinus() {
			quizContent = finQuiz[index];

			$('.promo-168_rotation-body').html(quizContent);
			index = (index - 1);
			if (index < 0) {
				index = (fql - 1);
			}
		}


		setInterval(function() {
			quizPlus();
		}, 10000);

		$('.promo-168_rotation-left').on('click', quizPlus);

		$('.promo-168_rotation-right').on('click', quizMinus);


		/*
		 * Конец крутилки умных фраз
		 */

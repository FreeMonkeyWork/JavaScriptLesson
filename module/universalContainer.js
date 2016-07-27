/*
		 * Создание обертки для вызываемого объекта
		 */

		function moduleBlock(cont, event) {
			var promoCover = document.createElement('div');
			promoCover.className = 'promo-58-cover';


			var promoSerfPreview = document.createElement('div');
			promoSerfPreview.className = 'promo-58-preview-cont';

			var promoXKill = document.createElement('span');
			promoXKill.className = 'promo-58-x-kill';
			promoXKill.innerHTML = '<i class="fa fa-close"></i>';


			/*Собираем превью*/




			$(promoSerfPreview).append(cont);

			promoSerfPreview.appendChild(promoXKill);
			document.body.appendChild(promoCover);
			document.body.appendChild(promoSerfPreview);

			if (event) {

				var clientCordX = event.pageX;
				var clientCordY = event.pageY;
				var CordFix = event.clientX;

				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;

				var blockWidth = promoSerfPreview.offsetWidth;

				promoSerfPreview.style.position = 'absolute';
				/*    promoSerfPreview.style.top = ((clientCordY - 350) + 'px');
				 promoSerfPreview.style.left = ((windowWidth / 2) - (blockWidth / 2) + 'px');    */
				promoSerfPreview.style.left = ((windowWidth / 2) - (blockWidth / 2) + 'px');
				$('.promo-58-preview-cont').css('margin-top', window.pageYOffset + 0);

			}

			var queryString = document.location.search;
			var queryStringhash = document.location.hash;
			if(queryString.indexOf("reg=ok") > 0) {

				$('.promo-58-preview-cont').addClass('promo-58-preview-cont__reg-ok');
				$('.promo-58-preview-cont').css('margin-top', window.pageYOffset + (windowHeight / 3));
			}
			/*Убивалка превью*/

			promoCover.addEventListener('click', promoRemove);
			promoXKill.addEventListener('click', promoRemove);

			function promoRemove() {
				
				document.body.removeChild(promoCover);
				document.body.removeChild(promoSerfPreview);
			}

			/*promoSerfPreview.addEventListener('click', promoRemove);*/


			/* конец убивалки*/
		}

		/*
		 * Конец создания обертки
		 */


		$('.promo-168__video__item_1').click(function (event) {

			var formCont = '<div class="promo-168__video_pop"><iframe width="560" height="315" src="https://www.youtube.com/embed/jsUbQyYtE9w" frameborder="0" allowfullscreen></iframe></div>';

			moduleBlock(formCont, event);

			return false;

		});

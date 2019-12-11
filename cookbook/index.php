<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="author" content="K. Kashchiev">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>YouRecipe</title>	
	<link rel="stylesheet" type="text/css" href="css/large.css">
	<!--<link rel="stylesheet" media="screen and (min-width: 421px)" href="css/large.css">-->
	<link href="https://fonts.googleapis.com/css?family=Courgette|Dancing+Script" rel="stylesheet">
</head>
<body>
	<header>
		<h1>YouRecipe</h1>
	</header>

	<nav>
		<div id="signInContainer">
			<div class="signInExit"></div>

			<div class="navItems signIn">
				<span class="signInText">Signin/up</span>

				<form class="signInForm" action="POST">
					<div class="formTop">
						<div class="inputImgContainer">
							<div class="inputImg inputImgUser"></div>
							
							<input class="signInInput userName" type="text" name="userName">
						</div>

						<div class="inputImgContainer">
							<div class="inputImg inputImgPassword"></div>
							
							<input class="signInInput password" type="password" name="password">
						</div>
					</div>
					
					<div class="formMiddle">
						<div class="inputImgContainer signUpHide">
							<div class="inputImg inputImgPassword2"></div>
							<input class="signInInput password2" type="password" name="password2">
						</div>

						<div class="inputImgContainer signUpHide">
							<div class="inputImg inputImgEmail1"></div>
							<input class="signInInput email1" type="email1" name="email1">
						</div>

						<div class="inputImgContainer signUpHide">
							<div class="inputImg inputImgEmail2"></div>
							<input class="signInInput email2" type="email2" name="email2">
						</div>
					</div>
					
					<div class="formBottom">
						<div class="inputImgContainer">
							<div class="checkBoxContainer1">
								<input class="checkBox1" type="checkbox" name="stayLogged" value="test">
								<span class="checkBoxText1">Stay signedin</span>
							</div>
						</div>

						<div class="inputImgContainer">
							<div class="checkBoxContainer2">
								<input class="checkBox2" type="checkbox" name="haveAccount" value="test">
								<span class="checkBoxText2">Already have an account</span>
							</div>

							<input class="submit" type="button" name="button" value="Signup">
						</div>
					</div>
				</form>
			</div>
		</div>

		<form class="searchForm">
			<div class="searchFormExit"></div>

			<div class="searchFiltersContainer">
				<span class="filtersText">Filters</span>

				<div class="arrowContainer">
					<div class="arrows arrowL"></div>
					<div class="arrows arrowR"></div>
				</div>
				
				<div class="searchFilters">	
					<select class="ingredientsToggle" name="ingredientsToggle">
						<option value="hide">Hide</option>
						<option value="show">Show</option>
					</select>

					<div class="searchOptionsContainer">

						<div class="searchOptions1">
							<span class="searchOptionTitle">Ingredients</span>
							<span class="searchOptionName">more than</span>

							<select class="ingredientsNumber" name="ingredientsNumber">
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="8">8</option>
								<option value="9">9</option>
								<option value="10">10</option>
							</select>
						</div>

						<div class="searchOptions2">
							<span class="searchOptionName">Time to cook</span>
							
							<div>
								<input class="preparationTimeInput" type="text">
								<span>min.</span>
							</div>
						</div>

						<div class="searchOptions1">
							<span class="searchOptionName">Dificulty</span>

							<select class="dificulty" name="dificulty">
								<option value="easy">Easy</option>
								<option value="medium">Medium</option>
								<option value="hard">Hard</option>
							</select>
						</div>
					</div>
				</div>
			</div>
			
			<input id="searchField" type="text">
			<span id="searchText">Search</span>
			<button class="searchButton"></button>
		</form>

		<div class="browseExit"></div>

		<div class="browseContainer">
			<div class="navItems browse">
				<span>Browse</span>

				<div class="browseInternal">
					<div class="browseInternalItems sauces">Sauces</div>
					<div class="browseInternalItems salads">Salads</div>
					<div class="browseInternalItems starters">Starters</div>
					<div class="browseInternalItems eggs">Eggs</div>
					<div class="browseInternalItems entrails">Entrails</div>
					<div class="browseInternalItems meat">Meat</div>
					<div class="browseInternalItems grill">Grill</div>
					<div class="browseInternalItems frozen">Frozen food</div>
					<div class="browseInternalItems steamed">Steamed</div>
					<div class="browseInternalItems microwave">Microwave</div>
				</div>
			</div>
		</div>
	</nav>

	<main>
		<section class="mainSections halfSection announcementSection">
			<p class="text announcementsText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati similique voluptate, laboriosam consectetur dolorem, magni iste, ut. Neque, iusto!</p>
		</section>

		<section class="mainSections halfSection previewSection">
			<img class="previewImage" src="" alt="Latest recipe preview">
			<h2 class="text previewRecipesName">Preview recipe name, preview recipe name</h2>
		</section>

		<section class="mainSections wholeSection siteInfoSection">
			<p class="text siteInfo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem porro cupiditate aperiam esse eos ducimus consequatur labore magnam rerum. Ipsum eos corporis quo architecto voluptatum veniam, quas omnis modi ex!</p>
		</section>

		<section class="foodTypeSections saucesSection">
			
		</section>

		<section class="foodTypeSections saladsSection">
			
		</section>

		<section class="foodTypeSections startersSection">
			
		</section>

		<section class="foodTypeSections eggsSection">
			
		</section>

		<section class="foodTypeSections entrailsSection">
			
		</section>

		<section class="foodTypeSections meatSection">
			<div class="foodTypeSectionsInternal pork">
				<div class="foodSectionCover"></div>
				<h3 class="foodSectionTitle titlePork">Pork</h3>
				<div class="foodSectionClickArea"></div>
			</div>

			<div class="foodTypeSectionsInternal beef">
				<div class="foodSectionCover"></div>
				<h3 class="foodSectionTitle titleBeef">Beef</h3>
				<div class="foodSectionClickArea"></div>
			</div>

			<div class="foodTypeSectionsInternal lamb">
				<div class="foodSectionCover"></div>
				<h3 class="foodSectionTitle titleLamb">Lamb<br>Mutton</h3>
				<div class="foodSectionClickArea"></div>
			</div>

			<div class="foodTypeSectionsInternal poultry">
				<div class="foodSectionCover"></div>
				<h3 class="foodSectionTitle titlePoultry">Poultry</h3>
				<div class="foodSectionClickArea"></div>
			</div>

			<div class="foodTypeSectionsInternal fish">
				<div class="foodSectionCover"></div>
				<h3 class="foodSectionTitle titleFish">Fish</h3>
				<div class="foodSectionClickArea"></div>
			</div>

			<div class="foodTypeSectionsInternal game">
				<div class="foodSectionCover"></div>
				<h3 class="foodSectionTitle titleGame">Game</h3>
				<div class="foodSectionClickArea"></div>
			</div>

			<div class="foodSectionsResults">
				<?php
					echo ""
				?>
			</div>

		</section>

		<section class="foodTypeSections grillSection">
			
		</section>

		<section class="foodTypeSections frozenSection">
			
		</section>

		<section class="foodTypeSections steamedSection">
			
		</section>

		<section class="foodTypeSections microwaveSection">
			
		</section>
	</main>

	<footer>
		<p class="footText"></p>
	</footer>

	<script src="index.js"></script>
</body>
</html>
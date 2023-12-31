Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe('Second scenario tests', function () {
  it('renders the correct buttons/answers for 1st question', function () {
    cy.visit('http://localhost:3000');
    cy.contains('LocalizR');
    cy.contains('Be a traveler, not a tourist!');
    cy.get('button').should('contain', 'START YOUR JOURNEY').click();
    cy.get('.auth0-lock-social-button-text').click();
    cy.get('img').first().click();
    cy.get('button').last().should('contain', 'Spanish Scenario 2').click();
  });
});

// tests 11 04 2018 tests start from here //

describe('Slath', function () {
  it('opens page and has correct content', function () {
    cy.visit('http://localhost:3000/home');
    cy.title().should('include', 'LocalizR');
    cy.get('.homebackground').should(
      'contain',
      'Be a traveler, not a tourist!'
    );
    cy.get('.sc-ifAKCX').should('contain', 'START YOUR JOURNEY');
  });

  it('can create a new user and logs in', function () {
    cy.get('.sc-ifAKCX').click();
    cy.get('.auth0-lock-alternative-link').click();
    cy.get('.auth0-lock-tabs').last().click();
    cy.get('.auth0-lock-input')
      .first()
      .type(`test_slath${Math.floor(Math.random() * 200000)}@slath.com`);
    cy.get('.auth0-lock-input').last().type('slathPASSWORD99');
    cy.get('.auth0-lock-submit').click();
    cy.get('#allow').click();
    cy.contains('Log Out').click();
  });
  //
  it('can login with a registered user', function () {
    cy.visit('http://localhost:3000/home');
    cy.get('button').first().click();
    cy.get('.auth0-lock-alternative').first().click();
    cy.get('.auth0-lock-input').first().type('test_slath105720@slath.com');
    cy.get('.auth0-lock-input').last().type('slathPASSWORD99');
    cy.get('.auth0-lock-submit').click();
    cy.contains('Log Out').click();
  });

  it('can login just by clicking the last login users e-mail', function () {
    cy.visit('http://localhost:3000/home');
    cy.get('.sc-ifAKCX').first().click();
    cy.get('.auth0-lock-social-button-text').click();
    cy.contains('Log Out').click();
  });
});
//
describe('Rendering the game', function () {
  it('renders Spanish Scenarios correctly', function () {
    cy.visit('http://localhost:3000/home');
    cy.contains('START YOUR JOURNEY').click();
    cy.get('.auth0-lock-social-button-text').click();
    cy.get('img').first().click();
    cy.get('.sc-bxivhb').first().should('contain', 'Spanish Scenario 1');
    cy.get('.sc-bxivhb').last().should('contain', 'Spanish Scenario 2');
  });

  it('renders French Scenarios correctly', function () {
    cy.visit('http://localhost:3000/home');
    cy.get('.sc-ifAKCX').click();
    cy.get('.auth0-lock-social-button-text').click();
    cy.get('img').last().click();
    cy.get('.sc-bxivhb').first().should('contain', 'French Scenario 1');
    cy.get('.sc-bxivhb').last().should('contain', 'French Scenario 2');
  });
});

describe('Playing the game', function () {
  it('renders first French scenario if clicked', function () {
    cy.get('#submitButton').first().click();
    cy.contains('You leave your house and start following these signs');
    cy.contains('Where are you going?');
    cy.contains('la gare de bus');
    cy.contains('La parada de metro');
    cy.contains('La caserne de pompiers');
    cy.contains('La station de métro').click();
  });
  //
  it('renders first Spanish scenario if clicked', function () {
    cy.visit('http://localhost:3000/home');
    cy.get('.sc-ifAKCX').click();
    cy.get('.auth0-lock-social-button-text').click();
    cy.get('img').first().click();
    cy.get('.sc-bxivhb').first().should('contain', 'Spanish Scenario 1');
    cy.get('.sc-bxivhb').last().should('contain', 'Spanish Scenario 2');
    cy.get('#submitButton').first().click();
  });
  //
  //
  it('renders the correct buttons/answers for 1st question', function () {
    cy.contains('You leave your house and start following these signs');
    cy.contains('Where are you going?');
    cy.contains('La parada de metro');
    cy.contains('La Universidad');
    cy.contains('La estación de autobuses');
    cy.contains('La estación de tren').click();
  });
  //
  it('renders the correct buttons/answers for 2nd question', function () {
    cy.contains('Cuánto cuesta un tren?');
    cy.contains('Cuánto cuesta un coche?');
    cy.contains('Cuánto tarda en llegar? ');
    cy.contains('Cuánto cuesta un billete?').click();
  });
  //
  it('renders the correct buttons/answers for 3rd question', function () {
    cy.contains('Cuál es el ultimo tren?');
    cy.contains('Cuál es el siguiente tren');
    cy.contains('Cuántos trenes hay?');
    cy.contains('Cuánto se tarda en llegar?').click();
  });
  //
  it('renders the correct buttons/answers for 4th question', function () {
    cy.contains('Calle 7');
    cy.contains('Silla 7');
    cy.contains('Coche 7');
    cy.contains('Andén 7').click();
  });

  it('renders the correct buttons/answers for 5th question', function () {
    cy.contains('Norte');
    cy.contains('Este');
    cy.contains('Oeste');
    cy.contains('Sur').click();
  });

  it('renders the correct buttons/answers for 6th question', function () {
    cy.contains('Dónde está el banco?');
    cy.contains('Dónde está la tienda');
    cy.contains('Dónde está la fuente?');
    cy.contains('Dónde está el mercado?').click();
  });

  it('renders the correct buttons/answers for 7th question', function () {
    cy.contains('Gire a la izquierda y siga recto');
    cy.contains('Siga recto');
    cy.contains('Al final de la calle');
    cy.contains('Gire a la derecha y siga recto').click();
  });

  it('renders the correct buttons/answers for 8th question', function () {
    cy.contains('Cuántos años tienes?');
    cy.contains('Cuánto hay?');
    cy.contains('Cuántos hijos tienes?');
    cy.contains('Cuánto cuesta?').click();
  });
  //
  it('renders buttons/score correctly after last question', function () {
    cy.contains('Log Out');
    cy.contains('Retry Quiz');
    cy.contains('Languages Page').click();
    cy.contains('Choose your language!');
  });
  //
  it('renders first French scenario if clicked', function () {
    cy.visit('http://localhost:3000/home');
    cy.get('button').click();
    cy.get('.auth0-lock-social-button-text').click();
    cy.get('img').last().click();
    cy.get('.sc-bxivhb').first().should('contain', 'French Scenario 1');
    cy.get('.sc-bxivhb').last().should('contain', 'French Scenario 2');
    cy.get('.sc-bxivhb').first().click();
  });
  //
  it('renders the correct buttons/answers for 1st question', function () {
    cy.contains('la gare de bus');
    cy.contains('La parada de metro');
    cy.contains('La caserne de pompiers');
    cy.contains('La station de métro').click();
  });
  //
  it('renders the correct buttons/answers for 2nd question', function () {
    cy.contains('Combien coûte un train?');
    cy.contains('Combien coûte une voiture?');
    cy.contains('Combien de temps il faut pour arriver?');
    cy.contains('Combien coûte un billet?').click();
  });
  //
  it('renders the correct buttons/answers for 3rd question', function () {
    cy.contains('Quel est le dernier train?');
    cy.contains('Quel est le prochain train');
    cy.contains('Combien y a-t-il de trains?');
    cy.contains('Combien de temps il faut pour y arriver?').click();
  });
  //
  it('renders the correct buttons/answers for 4th question', function () {
    cy.contains('Rue 7');
    cy.contains('Chaise 7');
    cy.contains('Voiture7');
    cy.contains('Plateforme 7').click();
  });
  //
  it('renders the correct buttons/answers for 5th question', function () {
    cy.contains('Nord');
    cy.contains('Est');
    cy.contains('Ouest');
    cy.contains('Sud').click();
  });
  //
  it('renders the correct buttons/answers for 6th question', function () {
    cy.contains('Où est la banque?');
    cy.contains('Où est le magasin?');
    cy.contains('Où est la source?');
    cy.contains('Où est le marché?').click();
  });
  //
  it('renders the correct buttons/answers for 7th question', function () {
    cy.contains('Tourner à gauche et continuer tout droit');
    cy.contains('Aller tout droit');
    cy.contains('au bout de la rue');
    cy.contains('Tourner à droite et continuer tout droit').click();
  });
  //
  it('renders the correct buttons/answers for 8th question', function () {
    cy.contains('Quel âge as-tu?');
    cy.contains('combien il y a?');
    cy.contains("combien d'enfants avez-vous?");
    cy.contains('combien coûte?').click();
  });

  it('renders buttons/score corerctly after last question', function () {
    cy.contains('Nice one, your score is 8');
    cy.get('button').first().should('contain', 'Log Out');
    cy.contains('Retry Quiz');
    cy.contains('Languages Page').click();
    cy.contains('Choose your language!');
    cy.contains('Log Out').click();
  });
});

// 11 04 2018 Wednesday tests 'til now //
describe('Play the game for 2nd scenario tests', function () {
  it('renders the correct buttons/answers for 1st question SPANISH', function () {
    cy.visit('http://localhost:3000');
    cy.get('button').click();
    cy.get('.auth0-lock-social-button-text').click();
    cy.get('img').first().click();
    cy.get('button').last().click();
    cy.contains('You enter in a restaurant');
    cy.contains('How do you ask for a table for two?');
    cy.contains('La estacion de autobus');
    cy.contains('La parada de metro'); // needs to change this answers
    cy.contains('La estacion de bomberos'); // they are not relevant
    cy.contains('La estacion de tren').click(); // to the question
  });

  it('renders the correct buttons/answers for 2nd question', function () {
    cy.contains("You're seated at a table");
    cy.contains('You want to order a glass of red wine..');
    cy.contains('Quiero un vaso de agua');
    cy.contains('Quiero una copa de vino blanco ');
    cy.contains('Quiero un vaso de vino tinto');
    cy.contains('Quiero una copa de vino tinto').click();
  });

  it('renders the correct buttons/answers for 3rd question', function () {
    cy.contains("You're ready to order your main meal");
    cy.contains('You decide to order Octopus');
    cy.contains('Albondigas');
    cy.contains('Pescado');
    cy.contains('Arroz');
    cy.contains('Pulpo').click();
  });

  it('renders the correct buttons/answers for 4th question', function () {
    cy.contains("You're not happy with your food");
    cy.contains('How would you complain when your food is cold??');
    cy.contains('Me encanta la comida');
    cy.contains('Disculpe, la comida está caliente');
    cy.contains('Disculpe, la bebida está fria');
    cy.contains('Disculpe, la comida está fria').click();
  });

  it('renders the correct buttons/answers for 5th question', function () {
    cy.contains('Your waiter brings you more food');
    cy.contains('You want to tell the waiter it tastes great');
    cy.contains('Está picante');
    cy.contains('Está crudo');
    cy.contains('Está salado');
    cy.contains('Está delicioso').click();
  });
});

// finished for todays tests 12 04 2018

//   it('Homepage renders correctly', function () {
//     cy.visit('http://localhost:3000')
//     cy.title().should('include', 'Slath')
//     cy.get('.sc-bwzfXH').should('contain', 'Be a traveler, not a tourist')
//   })
//
// // this one had to be commented due to already havin'
// // a registered account
//   // it('can register and log in', function () {
//   //   cy.contains('Log In or Sign Up').click()
//   //   cy.contains('Sign Up').click()
//   //   cy.get('input.auth0-lock-input').first()
//   //     .type(`test_slath${Math.floor(Math.random() * 200000)}@slath.com`)
//   //   cy.get('input.auth0-lock-input').last()
//   //     .type('slathPASSWORD99')
//   //   cy.get('span.auth0-label-submit').click()
//   //   cy.get('.icon-budicon-500').click()
//   // })
//
//   it('can log in w/ registered user and log out', function () {
//     cy.get('button').should('contain', 'Log In or Sign Up').click()
//     cy.get('.auth0-lock').should('contain', 'test_slath105720@slath.com')
//     cy.get('button').first().click()
//   })
//
//   it('can log in after log out again', function () {
//     cy.get('button').should('contain', 'Log Out')
//     cy.contains('Log Out').click()
//     cy.get('button').should('contain', 'Log In or Sign Up')
//     cy.get('button').click()
//     cy.get('.auth0-lock').should('contain', 'test_slath105720@slath.com')
//     cy.get('button').first().click()
//   })
//
//   it('can play Spanish game', function () {
//     cy.contains('Choose your language!')
//     cy.get('img').first().click()
//   })
//
//   it('can play scenario1-s first question', function () {
//     cy.contains('Spanish Scenario 1').click()
//     cy.contains('Log Out')
//     cy.get('img')
//     cy.contains('You choose to wear this for your date')
//     cy.contains('Which of these is your suit?')
//     cy.contains('el vestido rojo')
//     cy.contains('Los pantalones rojos')
//     cy.contains('La camiseta roja')
//     cy.contains('el traje rojo').click()
//   })
//
//   it('can play scenario1-s second question', function () {
//     cy.contains('Log Out')
//     cy.get('img')
//     cy.contains("You're going to the restaurant where your date is waiting for you...")
//     cy.contains('Which direction you should take?')
//     cy.contains('Este')
//     cy.contains('Norte')
//     cy.contains('Sur')
//     cy.contains('Oeste').click()
//   })
//
//   it('can play scenario1-s third question', function () {
//     cy.contains('Log Out')
//     cy.get('img')
//     cy.contains('You want to surprise your date with some ....')
//     cy.contains('What is your idea of the perfect romantic gift?')
//     cy.contains('Galletas')
//     cy.contains('Cucharas')
//     cy.contains('Uvas')
//     cy.contains('Flores').click()
//   })
//
//   it('can play scenario1-s fourth question', function () {
//     cy.contains('Log Out')
//     cy.get('img')
//     cy.contains('You want to impress your date with a nice compliment ....')
//     cy.contains('Which of these is the best compliment?')
//     cy.contains('Qué bello estás')
//     cy.contains('Qué extraña estás')
//     cy.contains('Qué grande estás')
//     cy.contains('Qué guapa estás').click()
//   })
//
//   it('can play scenario1-s fifth question', function () {
//     cy.contains('Log Out')
//     cy.get('img')
//     cy.contains("After a romantic and successfull date, you're inviting your date for a drink...")
//     cy.contains('Which of these is the best option?')
//     cy.contains('Mercado')
//     cy.contains('Banco')
//     cy.contains('Tienda')
//     cy.contains('Terraza-Bar de copas').click()
//   })
//
//   it('shows correct score after 5 good answers', function () {
//     cy.contains('Log Out')
//     cy.contains('Nice one, your score is 5')
//     cy.contains('Languages Page')
//     cy.contains('Retry Quiz')
//   })
//
//   it('Language Page button takes us back to home Choose Language page', function () {
//     cy.contains('Languages Page').click()
//     cy.contains('Choose your language!')
//   })
//
//
// describe('Slath scenario 2', function () {
//   it('can play scenario2-s first question', function () {
//     cy.get('img').click()
//     cy.contains('Spanish Scenario 2').click()
//     cy.contains('Log Out')
//     cy.get('img')
//     cy.contains("After a long trip to Malaga, you're getting ready to go to the beach, but you don't know how to the direction")
//     cy.contains('Which of these is a swinsuit?')
//     cy.contains('Toalla')
//     cy.contains('Camiseta')
//     cy.contains('Calcetines')
//     cy.contains('Bañador').click()
//   })
//
//   it('can play scenario2-s second question', function () {
//     cy.contains('Log Out')
//     cy.get('img')
//     cy.contains('As a person who takes care of the skin, you need to buy sun protection to prevent sunburn..')
//     cy.contains('Which of these is the sun protector?')
//     cy.contains('Crema de cara')
//     cy.contains('Pasta de dientes')
//     cy.contains('Gel de baño')
//     cy.contains('Protector solar').click()
//   })
//
//   it('can play scenario2-s third question', function () {
//     cy.contains('Log Out')
//     cy.get('img')
//     cy.contains("Now, You're getting to the beach by Bus...")
//     cy.contains('Which bus you need to get?')
//     cy.contains('Dirección centro')
//     cy.contains('Dirección Feria')
//     cy.contains('Dirección pueblo')
//     cy.contains('Dirección playa').click()
//   })
//
//   it('can play scenario2-s fourth question', function () {
//     cy.contains('Log Out')
//     cy.get('img')
//     cy.contains("You're enjoying a nice day on the beach, but You're geting thristy...")
//     cy.contains('What can you get?')
//     cy.contains('Pan')
//     cy.contains('Botella de vino')
//     cy.contains('Ensalada')
//     cy.contains('Botella de agua').click()
//   })
//
//   it('can play scenario2-s fifth question', function () {
//     cy.contains('Log Out')
//     cy.get('img')
//     cy.contains('After a nice day on the beach, you lose the track time and you miss your bus ..')
//     cy.contains('What time is the next bus?')
//     cy.contains('Cinco y media')
//     cy.contains('Seis y media')
//     cy.contains('Ocho en punto')
//     cy.contains('Seis en punto').click()
//   })
//
//   it('shows correct score after 5 good answers', function () {
//     cy.contains('Log Out')
//     cy.contains('Nice one, your score is 5')
//     cy.contains('Languages Page')
//     cy.contains('Retry Quiz')
//   })
// })
//
// describe('Slath wrong answers test', function () {
//   it('has 0 correct answers at the end of Spanish Scenario 1', function () {
//     cy.contains('Languages Page').click()
//     cy.get('img').click()
//     cy.contains('Spanish Scenario 1').click()
//     cy.get('#submitButton1').click()
//     cy.get('#submitButton3').click()
//     cy.get('#submitButton2').click()
//     cy.get('#submitButton1').click()
//     cy.get('#submitButton2').click()
//     cy.contains('Nice one, your score is 0')
//   })
//
//   it('has 0 correct answers at the end of Spanish Scenario 2', function () {
//     cy.contains('Languages Page').click()
//     cy.get('img').click()
//     cy.contains('Spanish Scenario 2').click()
//     cy.get('#submitButton2').click()
//     cy.get('#submitButton3').click()
//     cy.get('#submitButton1').click()
//     cy.get('#submitButton3').click()
//     cy.get('#submitButton2').click()
//     cy.contains('Nice one, your score is 0')
//   })
// })
//
// describe('Mixed good/wrong answers tests', function () {
//   it('has 3 correct answers at the end of Spanish Scenario 1', function () {
//     cy.contains('Languages Page').click()
//     cy.get('img').click()
//     cy.contains('Spanish Scenario 1').click()
//     cy.get('#submitButton2').click()
//     cy.get('#submitButton').click()
//     cy.get('#submitButton').click()
//     cy.get('#submitButton3').click()
//     cy.get('#submitButton').click()
//     cy.contains('Nice one, your score is 3')
//   })
//
//   it('has 2 correct answers at the end of Spanish Scenario 2', function () {
//     cy.contains('Languages Page').click()
//     cy.get('img').click()
//     cy.contains('Spanish Scenario 2').click()
//     cy.get('#submitButton').click()
//     cy.get('#submitButton2').click()
//     cy.get('#submitButton1').click()
//     cy.get('#submitButton3').click()
//     cy.get('#submitButton').click()
//     cy.contains('Nice one, your score is 2')
//   })
// })

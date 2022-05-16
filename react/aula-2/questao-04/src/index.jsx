import React from 'react';
import ReactDom from 'react-dom';

function formatName(user) {
	return (
    'meu nome é ' + user.name + ', tenho ' + (user.currentYear - user.birthYear) + ' anos e este é meu primeiro contato com JSX'
  )
}

const user = {
  name: 'Emmanuelle Oliveira',
  birthYear: 1994,
  currentYear: (new Date().getFullYear()) 
};

const element = ( 
	<h1>
		Olá, {formatName(user)}!
	</h1>
)

const root = document.getElementById('root');
ReactDom.render(element, root);


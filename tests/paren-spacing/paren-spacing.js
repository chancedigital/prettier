const a = fn( function( e ) {
	const rA = lol( "ok" ).ererer();

	if ( rA ) {
		rA.bang();
	} else if ( ! rA && typeof b === "undefined" ) {
		throw Error( { msg: "danger" } );
	}

	let yar = "ok";
	let par = `ok okok ${ yar }`;
	let ear = `no ononono ${ yar + 1 } popop op`;
	let bar = po( yar, { par }, "car" );
	let uar = ( wq ) => ( { war: wq, wq } );
	let tar = ( wq, yolo ) => ( { war: wq, wq, yolo } );
	let car = ( wq, yolo, { star } ) => ( { war: wq, wq, yolo, star: star } );
	
	var x = /** @type {string} */ ( fruit );

	switch ( car ) {
		case "car":
			doAThing();
			break;
		case "bar":
		case "star":
			return "star!";
		default:
			doAnotherThing( car );
	}

	return abc;
}, 150 );

const nope = `Feugiat conubia ${ str +
	5 +
	`Malesuada ${ star } Lacus` } Etiam purus at a magnis auctor interdum ipsum mus quisque, nisi leo neque diam consectetur platea porta scelerisque.`;

const superLongString = `Eu penatibus donec ${ car } eleifend mus nisl tortor lacus imperdiet velit vivamus, faucibus interdum lorem sodales fringilla ${ bar +
	tar( yar / 5 ) -
	( uar * 2 +
        `Torquent ${ yar() } felis arcu et eros` ) } a ridiculus ipsum odio.`;

const dynamicQuery = graphql`
	someQuery {
		${ callFunc( {
			a,
			b,
		} ) }
	}
`;

const styledComp = styled`
	display: none;
	align-items: center;
	margin: ${ vars + 5 }px;
    padding: ${ callFunc( { a, b } ) }px;
`;

const cssInJs = css`
	display: none;
	align-items: center;
	margin: ${ vars + 5 }px;
    padding: ${ callFunc( { a, b } ) }px;
`;

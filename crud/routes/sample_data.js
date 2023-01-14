var express = require('express');

var router = express.Router();

var database = require('../database');

router.get("/", function(request, response, next){

	var query = "SELECT * FROM inventory ORDER BY id DESC";

	database.query(query, function(error, data){

		if(error)
		{
			throw error; 
		}
		else
		{
			response.render('sample_data', {title:'Inventory Management System', action:'list', sampleData:data, message:request.flash('success')});
		}

	});

});

router.get("/add", function(request, response, next){

	response.render("sample_data", {title:'Insert New Item', action:'add'});

});

router.post("/add_sample_data", function(request, response, next){

	var name = request.body.name;
	var type = request.body.type;
	var description = request.body.description;
	var unit = request.body.unit;
	var quantity = request.body.quantity;
	var category = request.body.category;
	var location = request.body.location;
	var invoice = request.body.invoice;
	var consideration = request.body.consideration;
	var status = request.body.status;
	var code = request.body.code;

	var query = `
	INSERT INTO inventory 
	(name, type, description, unit, quantity, category, location,invoice, consideration, status,code) 
	VALUES ("${name}", "${type}", "${description}", "${unit}", "${quantity}", "${category}", "${location}", "${invoice}", "${consideration}", "${status}", "${code}")
	`;

	database.query(query, function(error, data){

		if(error)
		{
			throw error;
		}	
		else
		{
			request.flash('success', 'New Item Inserted');
			response.redirect("/sample_data");
		}

	});

});
    //   -------------------------------------------------------------------------------------

	router.get("/customer", function(request, response, next){

		response.render("sample_data", {title:'Customer Requirement', action:'customer'});
	
	});
	
	router.post("/customer_sample_data", function(request, response, next){
		//var id = request.body.id;
		var name = request.body.name;
		var fathername = request.body.fathername;
		var position = request.body.position;
		var departement = request.body.departement;
		var phone = request.body.phone;
		var item_code = request.body.item_code;
		var item_name = request.body.item_name;
		var quantity = request.body.quantity;
		var consider = request.body.consider;
		var status = request.body.status;
		var date = request.body.date;
	
		var state_insert = `
		INSERT INTO inventory_grant 
		(person_name, person_fathername, person_position, person_departement, person_phone, date, item_code,item_name, quantity, consider,status) 
		VALUES ("${name}", "${fathername}", "${position}", "${departement}", "${phone}", "${date}", "${item_code}", "${item_name}", "${quantity}", "${consider}", "${status}")`;
		
		var state_update = `UPDATE inventory SET quantity = quantity - ${quantity} where id=${item_code}`;
			function queryresult(ans){
				database.query(ans, function(error, data){
			
					if(error){throw error;}	
					else{
						queryresult(state_update);
						request.flash('success', 'New Item Inserted');
						response.redirect("/sample_data");
						}
			
				});
			}

		queryresult(state_insert);
		
		// database.query(query, function(error, data){
			
		// 	if(error){throw error;}	
		// 	else{
		// 		request.flash('success', 'New Item Inserted');
		// 		response.redirect("/sample_data");
		// 	    }
	
		// });
		
		
	
	});
    //   -------------------------------------------------------------------------------------
router.get('/edit/:id', function(request, response, next){

	var id = request.params.id;

	var query = `SELECT * FROM inventory WHERE id = "${id}"`;

	database.query(query, function(error, data){

		response.render('sample_data', {title: 'Edit Existed Item', action:'edit', sampleData:data[0]});

	});

});

router.post('/edit/:id', function(request, response, next){

	var id = request.params.id;

	var name = request.body.name;
	var type = request.body.type;
	var description = request.body.description;
	var unit = request.body.unit;
	var quantity = request.body.quantity;
	var category = request.body.category;
	var location = request.body.location;
	var invoice = request.body.invoice;
	var consideration = request.body.consideration;
	var status = request.body.status;
	var code = request.body.code;

	var query = `
	UPDATE inventory 
	SET name = "${name}", 
	type = "${type}", 
	description = "${description}", 
	unit = "${unit}", 
	quantity = "${quantity}", 
	category = "${category}", 
	location = "${location}", 
	invoice = "${invoice}", 
	consideration = "${consideration}",  
	status = "${status}", 
	code = "${code}" 
	WHERE id = "${id}"
	`;

	database.query(query, function(error, data){

		if(error)
		{
			throw error;
		}
		else
		{
			request.flash('success', 'Selected Item Updated');
			response.redirect('/sample_data');
		}

	});

});

router.get('/delete/:id', function(request, response, next){

	var id = request.params.id; 

	var query = `
	DELETE FROM inventory WHERE id = "${id}"
	`;

	database.query(query, function(error, data){

		if(error)
		{
			throw error;
		}
		else
		{
			request.flash('success', 'Selected Item Deleted');
			response.redirect("/sample_data");
		}

	});

});

module.exports = router;
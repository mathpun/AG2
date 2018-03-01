var task;
$(document).ready(function() {

	// Parameters
	var ntask = 10; // how many different tasks (alphabets) are there?
	var nway = 3; // n-way classification tasl

	// Selected demo images
	//latin_id = 2;
	Q1_id = 2;
	Q2_id = 3;


	var spec = {};
	spec.list_condition = ['a','a'];

	task = classification(spec);
	var condition = task.getCondition();

	var data = {};
	data.imglist_demo = getlist_test_demo(Q1_id,Q2_id);
	data.imglist_list_demo = getlist_train_demo(nway);
	data.imglist_test = getlist_test(condition,ntask,nway);
	data.imglist_list_train = getlist_train(condition,ntask,nway);
	task.load_images(data);
//	console.log("imglist_test:"+data.imglist_test);
//	console.log("imglist_train:"+data.imglist_list_train);
});

// randomly choose a "test" image for each trial
var getlist_test = function (type,ntask,nway) {
    var list = new Array();
    var dname = 'images_classif/';
  	var count = 0;
  	for (var i=1; i <= ntask; i++) {
  		var c = tu.randint(1,1); // random choice of the image
  		list[count] = dname + 'task' + i + type + '_test' + c + '.png';
  		count++;
  	}
    return list;
 };

// enumerate the image set which is the training images
var getlist_train = function (type,ntask,nway) {
    var list = new Array();
    var dname = 'images_classif/';
  	for (var i=1; i <= ntask; i++) {
  		list[i-1] = new Array();
  		for (var c=1; c <= nway; c++ ) {
  			list[i-1][c-1] = dname + 'task' + i + type + '_train' + c + '.png';
  		}
  	}
    return list;
};

// Get just the two test images for the demo
var getlist_test_demo = function (Q1_id,Q2_id) {

	var list = new Array();
	var dname = 'images_classif_demo/';
//  	list[0] = dname + 'latin_test' + latin_id + '.png';
	list[0] = dname + 'Q1_test' + Q1_id + '.png';
	list[1] = dname + 'Q2_test' + Q2_id + '.png';
//	list[r[2]] = dname + 'Q3_test' + Q3_id + '.png';
//	list[r[3]] = dname + 'Q4_test' + Q4_id + '.png';

	return list;
};

// Get two lists of training images
var getlist_train_demo = function (nway) {
	var list = new Array();
	var dname = 'images_classif_demo/';
//

	list[0] = new Array();
	for (var c=1; c <= nway; c++ ) {
  		list[0][c-1] = dname + 'Q1_train' + c + '.png';
    }

	list[1] = new Array();
	for (var c=1; c <= nway; c++ ) {
	  	list[1][c-1] = dname + 'Q2_train' + c + '.png';
	  }

		
	return list;
};


var getlist_test = function (type,ntask,nway) {
    var list = new Array();
    var dname = 'images_classif/';
    var count = 0;
    list[0] = dname + 'task1' + type + '_test' + '2' + '.png';
    list[1] = dname + 'task2' + type + '_test' + '3' + '.png';
    list[2] = dname + 'task3' + type + '_test' + '1' + '.png';
    list[3] = dname + 'task4' + type + '_test' + '2' + '.png';
    list[4] = dname + 'task5' + type + '_test' + '3' + '.png';
    list[5] = dname + 'task6' + type + '_test' + '1' + '.png';
    list[6] = dname + 'task7' + type + '_test' + '3' + '.png';
    list[7] = dname + 'task8' + type + '_test' + '1' + '.png';
    list[8] = dname + 'task9' + type + '_test' + '2' + '.png';
    list[9] = dname + 'task10' + type + '_test' + '1' + '.png';
//    list[10] = dname + 'task11' + type + '_test' + '3' + '.png';
//    list[11] = dname + 'task12' + type + '_test' + '4' + '.png';
    return list;
};





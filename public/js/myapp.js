$(function(){
	$("#imagefile").fileinput({
		initialPreview: [
		"<img src='/images/feng.jpg' class='file-preview-image' alt='dreamapple' title='dreamapple'>"
		],
		previewFileType: "image",
		browseClass: "btn btn-success",
		browseLabel: "&nbsp;选择图片",
		browseIcon: '<i class="glyphicon glyphicon-picture"></i>',
		removeClass: "btn btn-danger",
		removeLabel: "删除",
		removeIcon: '<i class="glyphicon glyphicon-trash"></i>',
		uploadClass: "btn btn-info",
		uploadLabel: "上传",
		uploadIcon: '<i class="glyphicon glyphicon-upload"></i>',
		maxFileCount: 10,
		allowedFileExtensions: ["jpg", "gif", "png"]
	});
});
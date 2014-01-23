// Copyright (c) 2013, Web Notes Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

if(!window.erpnext) window.erpnext = {};

// Add / update a new Lead / Communication
// subject, sender, description
wn.send_message = function(opts, btn) {
	return wn.call({
		type: "POST",
		method: "erpnext.templates.utils.send_message",
		btn: btn,
		args: opts,
		callback: opts.callback
	});
};

// for backward compatibility
erpnext.send_message = wn.send_message;
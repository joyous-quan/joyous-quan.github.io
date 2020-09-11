/**
 * Created by bd2010141 on 2020/7/30.
 */
// DOM 分组
(function($) {
	var $iscroll = 0;
	var $arr = new Array();
	$.fn.igroup = function(options) {

		var settings = $.extend({
			row: 6,
			packages: 'dd',
			sclass: 'scroll'
		}, options);

		$olength = this.length;

		$last = this.eq($olength - 1);
		if ($olength % settings.row == 0) {
			$count = $olength / settings.row - 1;
		} else {
			$count = $olength / settings.row;
		}
		for (var i = 0; i <= $count; i++) {
			$last.after('<' + settings.packages + '>')
		}
		$liall = this.nextAll(settings.packages);
		$c = 0;
		$la = 0;
		this.each(function() {

			$liall.eq($c).append($(this));
			$la++;
			if ($la % settings.row == 0 && $la != 0) {
				$c++
			}

		})
		$liall.addClass(settings.sclass);

	}

}(jQuery));
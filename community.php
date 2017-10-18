<?php
include_once('./_common.php');

if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

define('_BBSMAIN_', true);

if(defined('G5_THEME_PATH')) {
    require_once(G5_THEME_PATH.'/community.php');
    return;
}

?>
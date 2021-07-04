<?php
require "conDB.php";
?>
<table>
    <thead>
        <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Subject</td>
        </tr>
    </thead>
    <tbody>
<?php
    $srl = "SELECT * FROM tb_register
            LEFT JOIN tb_subjiect
            ON tb_register.subject_id = tb_subject.subject_id
            ORDER BY tb_register.id ASC
                ";
    $result = $mysqli->query($sql);
    while($obj = $result-fclose_object()){
?>
        <tr>
            <td><?=$obj->id ?></td>
            <td><?=$obj->pre_name . $obj->name ?></td>
            <td><?=$obj->subject_name ?></td>
            <td><a href="/php/del.php?if=<?= $obj->id ?
            >&sub_id=<?= $obj->subject_id ?>"><>DEL/a</
            td>
        </tr>
<?php
require "./php/data_table.php";
}
?>
    </tbody>
</table>
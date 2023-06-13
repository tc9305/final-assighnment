<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $mail = $_POST['email'];
    $phone = $_POST['phone'];
    //require_once('../TCPDF/tcpdf_import.php');

    /*---------------- Sent Mail Start -----------------*/
    $to = $mail;
    $subject = "贊助確認單";
    $message = "
    姓名: $name
    電話號碼: $phone
    購買金額: NT20萬元
    ~~~~感謝把拔斗內~~~~
    -------此郵件為自動寄出請勿回復--------
    ";

    //mail($to, $subject, $message);
    if (mail($to, $subject, $message)) {
      echo "邮件发送成功！";
  } else {
      echo "邮件发送失败！";
  }

    /*---------------- Sent Mail End -------------------*/

    /*---------------- Print PDF Start -----------------
    $pdf = new TCPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);
    $pdf->setPrintHeader(false);
    $pdf->setPrintFooter(false);
    $pdf->SetFont('cid0jp', '', 18);
    $pdf->AddPage();

    $html = <<<EOF
    <table style="text-align:center;" border="1" font-size:12pt>
        <tr>
            <td>贊助金額</td>
            <td style="color: red;">購買金額: NT20萬元</td>
            <td>電話</td>
            <td>$phone</td>
        </tr>
        <tr>
            <td colspan="1">Email</td>
            <td colspan="3">$mail</td>
        </tr>
    </table>
    EOF;

    $pdf->writeHTML($html);
    $pdf->lastPage();
    $pdf->Output('order.pdf', 'I');*/

    /*---------------- Print PDF End -------------------*/

    // 其他处理逻辑或重定向到其他页面
} 
?>

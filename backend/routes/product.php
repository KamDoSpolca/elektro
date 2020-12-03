<?php
require  'connect.php';
echo som tu;
if (!$conn1) {
  echo "nieeeeeeeeeeje1";
}
if (!$conn2) {
  echo "nieeeeeeeeeeje2";
}

$app->get('/list-products', function (Request $request, Response $response, $args) {
    //vypis vsetkych produktov predajne
    $id = $request->getQueryParam('id');
    try {
        $stmt = $this->db->prepare('SELECT * FROM products WHERE store_id = :id');
        $stmt->bindValue(':id', $id);
        $stmt->execute();
        $tplVars['products'] = $stmt->fetchAll();

        return $this->view->render($response, 'mystore.component.html', $tplVars);
    } catch (Exception $ex) {
        $this->logger->error($ex->getMessage());
        exit('DB ERROR');
    }
})->setName('list-products');

?>



``mx.mlp``
====================

Description
----------------------

Convenience interface for multiple layer perceptron

**Example**::

	 require(mlbench)
	 data(Sonar, package="mlbench")
	 Sonar[,61] = as.numeric(Sonar[,61])-1
	 train.ind = c(1:50, 100:150)
	 train.x = data.matrix(Sonar[train.ind, 1:60])
	 train.y = Sonar[train.ind, 61]
	 test.x = data.matrix(Sonar[-train.ind, 1:60])
	 test.y = Sonar[-train.ind, 61]
	 model = mx.mlp(train.x, train.y, hidden_node = 10, out_node = 2, out_activation = "softmax",
	 learning.rate = 0.1)
	 preds = predict(model, test.x)
	 
Usage
----------

.. code:: r

	mx.mlp(

	  data,

	  label,

	  hidden_node = 1,

	  out_node,

	  dropout = NULL,

	  activation = "tanh",

	  out_activation = "softmax",

	  ctx = mx.ctx.default(),

	  ...

	)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | the input matrix. Only mx.io.DataIter and R array/matrix   |
|                                        | types                                                      |
|                                        | supported.                                                 |
+----------------------------------------+------------------------------------------------------------+
| ``label``                              | the training label. Only R array type supported.           |
+----------------------------------------+------------------------------------------------------------+
| ``hidden_node``                        | a vector containing number of hidden nodes on each hidden  |
|                                        | layer as well as the output                                |
|                                        | layer.                                                     |
+----------------------------------------+------------------------------------------------------------+
| ``out_node``                           | the number of nodes on the output layer.                   |
+----------------------------------------+------------------------------------------------------------+
| ``dropout``                            | a number in [0,1) containing the dropout ratio from the    |
|                                        | last hidden layer to the output                            |
|                                        | layer.                                                     |
+----------------------------------------+------------------------------------------------------------+
| ``activation``                         | either a single string or a vector containing the names of |
|                                        | the activation                                             |
|                                        | functions.                                                 |
+----------------------------------------+------------------------------------------------------------+
| ``out_activation``                     | a single string containing the name of the output          |
|                                        | activation                                                 |
|                                        | function.                                                  |
+----------------------------------------+------------------------------------------------------------+
| ``ctx``                                | whether train on cpu (default) or gpu.                     |
+----------------------------------------+------------------------------------------------------------+
| ````                                   | other parameters passing to                                |
|                                        | ``mx.model.FeedForward.create``/                           |
+----------------------------------------+------------------------------------------------------------+
| ``eval.metric``                        | the evaluation metric/                                     |
+----------------------------------------+------------------------------------------------------------+




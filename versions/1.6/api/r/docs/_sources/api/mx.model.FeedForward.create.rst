

``mx.model.FeedForward.create``
==============================================================

Description
----------------------

Create a MXNet Feedforward neural net model with the specified training.

Usage
----------

.. code:: r

	mx.model.FeedForward.create(

	  symbol,

	  X,

	  y = NULL,

	  ctx = NULL,

	  begin.round = 1,

	  num.round = 10,

	  optimizer = "sgd",

	  initializer = mx.init.uniform(0.01),

	  eval.data = NULL,

	  eval.metric = NULL,

	  epoch.end.callback = NULL,

	  batch.end.callback = NULL,

	  array.batch.size = 128,

	  array.layout = "auto",

	  kvstore = "local",

	  verbose = TRUE,

	  arg.params = NULL,

	  aux.params = NULL,

	  input.names = NULL,

	  output.names = NULL,

	  fixed.param = NULL,

	  allow.extra.params = FALSE,

	  metric_cpu = TRUE,

	  ...

	)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``symbol``                             | The symbolic configuration of the neural network.          |
+----------------------------------------+------------------------------------------------------------+
| ``X``                                  | mx.io.DataIter or R array/matrix.                          |
|                                        |                                                            |
|                                        | The training data.                                         |
+----------------------------------------+------------------------------------------------------------+
| ``y``                                  | R array, optional label of the data.                       |
|                                        |                                                            |
|                                        | This is only used when X is R array.                       |
+----------------------------------------+------------------------------------------------------------+
| ``ctx``                                | mx.context or list of mx.context, optional.                |
|                                        |                                                            |
|                                        | The devices used to perform training.                      |
+----------------------------------------+------------------------------------------------------------+
| ``begin.round``                        | integer (default=1).                                       |
|                                        |                                                            |
|                                        | The initial iteration over the training data to train the  |
|                                        | model.                                                     |
+----------------------------------------+------------------------------------------------------------+
| ``num.round``                          | integer (default=10).                                      |
|                                        |                                                            |
|                                        | The number of iterations over training data to train the   |
|                                        | model.                                                     |
+----------------------------------------+------------------------------------------------------------+
| ``optimizer``                          | string, default="sgd"                                      |
|                                        |                                                            |
|                                        | The optimization method.                                   |
+----------------------------------------+------------------------------------------------------------+
| ``initializer``                        | initializer object. default=mx.init.uniform(0.01).         |
|                                        |                                                            |
|                                        | The initialization scheme for parameters.                  |
+----------------------------------------+------------------------------------------------------------+
| ``eval.data``                          | mx.io.DataIter or list(data=R.array, label=R.array),       |
|                                        | optional.                                                  |
|                                        |                                                            |
|                                        | The validation set used for validation evaluation during   |
|                                        | the                                                        |
|                                        | progress                                                   |
+----------------------------------------+------------------------------------------------------------+
| ``eval.metric``                        | function, optional.                                        |
|                                        |                                                            |
|                                        | The evaluation function on the results.                    |
+----------------------------------------+------------------------------------------------------------+
| ``epoch.end.callback``                 | function, optional.                                        |
|                                        |                                                            |
|                                        | The callback when iteration ends.                          |
+----------------------------------------+------------------------------------------------------------+
| ``batch.end.callback``                 | function, optional.                                        |
|                                        |                                                            |
|                                        | The callback when one mini-batch iteration ends.           |
+----------------------------------------+------------------------------------------------------------+
| ``array.batch.size``                   | integer (default=128).                                     |
|                                        |                                                            |
|                                        | The batch size used for R array training.                  |
+----------------------------------------+------------------------------------------------------------+
| ``array.layout``                       | can be "auto", "colmajor", "rowmajor", (detault=auto).     |
|                                        |                                                            |
|                                        | The layout of array. "rowmajor" is only supported for two  |
|                                        | dimensional                                                |
|                                        | array.                                                     |
|                                        | For matrix, "rowmajor" means dim(X) = c(nexample,          |
|                                        | nfeatures),                                                |
|                                        | "colmajor" means dim(X) = c(nfeatures, nexample)           |
|                                        | "auto" will auto detect the layout by match the feature    |
|                                        | size,                                                      |
|                                        | and will report error when X is a square matrix to ask     |
|                                        | user to explicitly specify                                 |
|                                        | layout.                                                    |
+----------------------------------------+------------------------------------------------------------+
| ``kvstore``                            | string (default="local").                                  |
|                                        |                                                            |
|                                        | The parameter synchronization scheme in multiple devices.  |
+----------------------------------------+------------------------------------------------------------+
| ``verbose``                            | logical (default=TRUE).                                    |
|                                        |                                                            |
|                                        | Specifies whether to print information on the iterations   |
|                                        | during                                                     |
|                                        | training.                                                  |
+----------------------------------------+------------------------------------------------------------+
| ``arg.params``                         | list, optional.                                            |
|                                        |                                                            |
|                                        | Model parameter, list of name to NDArray of net's weights. |
+----------------------------------------+------------------------------------------------------------+
| ``aux.params``                         | list, optional.                                            |
|                                        |                                                            |
|                                        | Model parameter, list of name to NDArray of net's          |
|                                        | auxiliary                                                  |
|                                        | states.                                                    |
+----------------------------------------+------------------------------------------------------------+
| ``input.names``                        | optional.                                                  |
|                                        |                                                            |
|                                        | The names of the input symbols.                            |
+----------------------------------------+------------------------------------------------------------+
| ``output.names``                       | optional.                                                  |
|                                        |                                                            |
|                                        | The names of the output symbols.                           |
+----------------------------------------+------------------------------------------------------------+
| ``fixed.param``                        | The parameters to be fixed during training. For these      |
|                                        | parameters, not                                            |
|                                        | gradients                                                  |
|                                        | will be calculated and thus no space will be allocated for |
|                                        | the                                                        |
|                                        | gradient.                                                  |
+----------------------------------------+------------------------------------------------------------+
| ``allow.extra.params``                 | Whether allow extra parameters that are not needed by      |
|                                        | symbol.                                                    |
|                                        |                                                            |
|                                        | If this is TRUE, no error will be thrown when arg_params   |
|                                        | or                                                         |
|                                        | aux_params                                                 |
|                                        | contain extra parameters that is not needed by the         |
|                                        | executor.                                                  |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``model`` A trained mxnet model.



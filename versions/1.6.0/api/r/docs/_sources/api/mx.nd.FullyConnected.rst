

``mx.nd.FullyConnected``
================================================

Description
----------------------

Applies a linear transformation: :math:`Y = XW^T + b`.

If ``flatten`` is set to be true, then the shapes are:

	- **data**: `(batch_size, x1, x2, ..., xn)`
	- **weight**: `(num_hidden, x1 * x2 * ... * xn)`
	- **bias**: `(num_hidden,)`
	- **out**: `(batch_size, num_hidden)`

If ``flatten`` is set to be false, then the shapes are:

	- **data**: `(x1, x2, ..., xn, input_dim)`
	- **weight**: `(num_hidden, input_dim)`
	- **bias**: `(num_hidden,)`
	- **out**: `(x1, x2, ..., xn, num_hidden)`

The learnable parameters include both ``weight`` and ``bias``.

If ``no_bias`` is set to be true, then the ``bias`` term is ignored.


.. note::

	 The sparse support for FullyConnected is limited to forward evaluation with `row_sparse`
	 weight and bias, where the length of `weight.indices` and `bias.indices` must be equal
	 to `num_hidden`. This could be useful for model inference with `row_sparse` weights
	 trained with importance sampling or noise contrastive estimation.
	 
	 To compute linear transformation with 'csr' sparse data, sparse.dot is recommended instead
	 of sparse.FullyConnected.
	 
	 
	 


Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Input data.                                                |
+----------------------------------------+------------------------------------------------------------+
| ``weight``                             | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Weight matrix.                                             |
+----------------------------------------+------------------------------------------------------------+
| ``bias``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Bias parameter.                                            |
+----------------------------------------+------------------------------------------------------------+
| ``num.hidden``                         | int, required.                                             |
|                                        |                                                            |
|                                        | Number of hidden nodes of the output.                      |
+----------------------------------------+------------------------------------------------------------+
| ``no.bias``                            | boolean, optional, default=0.                              |
|                                        |                                                            |
|                                        | Whether to disable bias parameter.                         |
+----------------------------------------+------------------------------------------------------------+
| ``flatten``                            | boolean, optional, default=1.                              |
|                                        |                                                            |
|                                        | Whether to collapse all but the first axis of the input    |
|                                        | data                                                       |
|                                        | tensor.                                                    |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/nn/fully_connected.cc#L291


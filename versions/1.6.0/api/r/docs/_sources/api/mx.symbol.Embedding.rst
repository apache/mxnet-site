

``mx.symbol.Embedding``
==============================================

Description
----------------------

Maps integer indices to vector representations (embeddings).

This operator maps words to real-valued vectors in a high-dimensional space,
called word embeddings. These embeddings can capture semantic and syntactic properties of the words.
For example, it has been noted that in the learned embedding spaces, similar words tend
to be close to each other and dissimilar words far apart.

For an input array of shape (d1, ..., dK),
the shape of an output array is (d1, ..., dK, output_dim).
All the input values should be integers in the range [0, input_dim).

If the input_dim is ip0 and output_dim is op0, then shape of the embedding weight matrix must be
(ip0, op0).

When "sparse_grad" is False, if any index mentioned is too large, it is replaced by the index that
addresses the last vector in an embedding matrix.
When "sparse_grad" is True, an error will be raised if invalid indices are found.


**Example**::

	 
	 input_dim = 4
	 output_dim = 5
	 
	 // Each row in weight matrix y represents a word. So, y = (w0,w1,w2,w3)
	 y = [[  0.,   1.,   2.,   3.,   4.],
	 [  5.,   6.,   7.,   8.,   9.],
	 [ 10.,  11.,  12.,  13.,  14.],
	 [ 15.,  16.,  17.,  18.,  19.]]
	 
	 // Input array x represents n-grams(2-gram). So, x = [(w1,w3), (w0,w2)]
	 x = [[ 1.,  3.],
	 [ 0.,  2.]]
	 
	 // Mapped input x to its vector representation y.
	 Embedding(x, y, 4, 5) = [[[  5.,   6.,   7.,   8.,   9.],
	 [ 15.,  16.,  17.,  18.,  19.]],
	 
	 [[  0.,   1.,   2.,   3.,   4.],
	 [ 10.,  11.,  12.,  13.,  14.]]]
	 
	 
	 The storage type of weight can be either row_sparse or default.
	 

.. note::

	 If "sparse_grad" is set to True, the storage type of gradient w.r.t weights will be
	 "row_sparse". Only a subset of optimizers support sparse gradients, including SGD, AdaGrad
	 and Adam. Note that by default lazy updates is turned on, which may perform differently
	 from standard updates. For more details, please check the Optimization API at:
	 https://mxnet.incubator.apache.org/api/python/optimization/optimization.html
	 
	 
	 

Usage
----------

.. code:: r

	mx.symbol.Embedding(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The input array to the embedding operator.                 |
+----------------------------------------+------------------------------------------------------------+
| ``weight``                             | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The embedding weight matrix.                               |
+----------------------------------------+------------------------------------------------------------+
| ``input.dim``                          | int, required.                                             |
|                                        |                                                            |
|                                        | Vocabulary size of the input indices.                      |
+----------------------------------------+------------------------------------------------------------+
| ``output.dim``                         | int, required.                                             |
|                                        |                                                            |
|                                        | Dimension of the embedding vectors.                        |
+----------------------------------------+------------------------------------------------------------+
| ``dtype``                              | {'float16', 'float32', 'float64', 'int32', 'int64',        |
|                                        | 'int8', 'uint8'},optional,                                 |
|                                        | default='float32'.                                         |
|                                        |                                                            |
|                                        | Data type of weight.                                       |
+----------------------------------------+------------------------------------------------------------+
| ``sparse.grad``                        | boolean, optional, default=0.                              |
|                                        |                                                            |
|                                        | Compute row sparse gradient in the backward calculation.   |
|                                        | If set to True, the grad's storage type is                 |
|                                        | row_sparse.                                                |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/indexing_op.cc#L539


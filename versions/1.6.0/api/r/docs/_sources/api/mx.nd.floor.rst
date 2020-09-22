

``mx.nd.floor``
==============================

Description
----------------------

Returns element-wise floor of the input.

The floor of the scalar x is the largest integer i, such that i <= x.


**Example**::

	 
	 floor([-2.1, -1.9, 1.5, 1.9, 2.1]) = [-3., -2.,  1.,  1.,  2.]
	 
	 The storage type of ``floor`` output depends upon the input storage type:
	 
	- floor(default) = default
	- floor(row_sparse) = row_sparse
	- floor(csr) = csr
	 
	 
	 


Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The input array.                                           |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_unary_op_basic.cc#L837


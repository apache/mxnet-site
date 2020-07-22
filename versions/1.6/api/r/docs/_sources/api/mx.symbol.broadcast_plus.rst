

``mx.symbol.broadcast_plus``
========================================================

Description
----------------------

Returns element-wise sum of the input arrays with broadcasting.

`broadcast_plus` is an alias to the function `broadcast_add`.


**Example**::

	 
	 x = [[ 1.,  1.,  1.],
	 [ 1.,  1.,  1.]]
	 
	 y = [[ 0.],
	 [ 1.]]
	 
	 broadcast_add(x, y) = [[ 1.,  1.,  1.],
	 [ 2.,  2.,  2.]]
	 
	 broadcast_plus(x, y) = [[ 1.,  1.,  1.],
	 [ 2.,  2.,  2.]]
	 
	 Supported sparse operations:
	 
	 broadcast_add(csr, dense(1D)) = dense
	 broadcast_add(dense(1D), csr) = dense
	 
	 
	 

Usage
----------

.. code:: r

	mx.symbol.broadcast_plus(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``lhs``                                | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | First input to the function                                |
+----------------------------------------+------------------------------------------------------------+
| ``rhs``                                | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Second input to the function                               |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_binary_broadcast_op_basic.cc#L58


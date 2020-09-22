

``mx.symbol.broadcast_mod``
======================================================

Description
----------------------

Returns element-wise modulo of the input arrays with broadcasting.


**Example**::

	 
	 x = [[ 8.,  8.,  8.],
	 [ 8.,  8.,  8.]]
	 
	 y = [[ 2.],
	 [ 3.]]
	 
	 broadcast_mod(x, y) = [[ 0.,  0.,  0.],
	 [ 2.,  2.,  2.]]
	 
	 
	 

Usage
----------

.. code:: r

	mx.symbol.broadcast_mod(...)

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


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_binary_broadcast_op_basic.cc#L222




``mx.symbol.abs``
==================================

Description
----------------------

Returns element-wise absolute value of the input.


**Example**::

	 
	 abs([-2, 0, 3]) = [2, 0, 3]
	 
	 The storage type of ``abs`` output depends upon the input storage type:
	 
	- abs(default) = default
	- abs(row_sparse) = row_sparse
	- abs(csr) = csr
	 
	 
	 

Usage
----------

.. code:: r

	mx.symbol.abs(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The input array.                                           |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_unary_op_basic.cc#L721


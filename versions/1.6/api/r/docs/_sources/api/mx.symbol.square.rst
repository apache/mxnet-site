

``mx.symbol.square``
========================================

Description
----------------------

Returns element-wise squared value of the input.

.. math::

   square(x) = x^2


**Example**::

	 
	 square([2, 3, 4]) = [4, 9, 16]
	 
	 The storage type of ``square`` output depends upon the input storage type:
	 
	- square(default) = default
	- square(row_sparse) = row_sparse
	- square(csr) = csr
	 
	 
	 

Usage
----------

.. code:: r

	mx.symbol.square(...)

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


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_unary_op_pow.cc#L118


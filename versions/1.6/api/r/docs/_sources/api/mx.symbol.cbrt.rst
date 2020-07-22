

``mx.symbol.cbrt``
====================================

Description
----------------------

Returns element-wise cube-root value of the input.

.. math::

   cbrt(x) = \sqrt[3]{x}


**Example**::

	 
	 cbrt([1, 8, -125]) = [1, 2, -5]
	 
	 The storage type of ``cbrt`` output depends upon the input storage type:
	 
	- cbrt(default) = default
	- cbrt(row_sparse) = row_sparse
	- cbrt(csr) = csr
	 
	 
	 

Usage
----------

.. code:: r

	mx.symbol.cbrt(...)

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


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_unary_op_pow.cc#L216


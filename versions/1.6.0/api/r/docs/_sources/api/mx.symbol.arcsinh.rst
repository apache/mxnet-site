

``mx.symbol.arcsinh``
==========================================

Description
----------------------

Returns the element-wise inverse hyperbolic sine of the input array, \
computed element-wise.

The storage type of ``arcsinh`` output depends upon the input storage type:

	- arcsinh(default) = default
	- arcsinh(row_sparse) = row_sparse
	- arcsinh(csr) = csr




Usage
----------

.. code:: r

	mx.symbol.arcsinh(...)

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


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/tensor/elemwise_unary_op_trig.cc#L436


.. raw:: html



``mx.nd.sinh``
============================

Description
----------------------

Returns the hyperbolic sine of the input array, computed element-wise.

.. math::

   sinh(x) = 0.5\times(exp(x) - exp(-x))

The storage type of ``sinh`` output depends upon the input storage type:

	- sinh(default) = default
	- sinh(row_sparse) = row_sparse
	- sinh(csr) = csr





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


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/master/src/operator/tensor/elemwise_unary_op_trig.cc#L201


.. disqus::
   :disqus_identifier: mx.nd.sinh

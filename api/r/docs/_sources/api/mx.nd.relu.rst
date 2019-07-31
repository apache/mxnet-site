.. raw:: html



``mx.nd.relu``
============================

Description
----------------------

Computes rectified linear.

.. math::

   max(features, 0)

The storage type of ``relu`` output depends upon the input storage type:

	- relu(default) = default
	- relu(row_sparse) = row_sparse
	- relu(csr) = csr





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


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/master/src/operator/tensor/elemwise_unary_op_basic.cc#L85


.. disqus::
   :disqus_identifier: mx.nd.relu

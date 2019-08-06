.. raw:: html



``mx.nd.batch.dot``
======================================

Description
----------------------

Batchwise dot product.

``batch_dot`` is used to compute dot product of ``x`` and ``y`` when ``x`` and
``y`` are data in batch, namely 3D arrays in shape of `(batch_size, :, :)`.

For example, given ``x`` with shape `(batch_size, n, m)` and ``y`` with shape
`(batch_size, m, k)`, the result array will have shape `(batch_size, n, k)`,
which is computed by::

	 batch_dot(x,y)[i,:,:] = dot(x[i,:,:], y[i,:,:])
	 
	 
	 


Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``lhs``                                | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The first input                                            |
+----------------------------------------+------------------------------------------------------------+
| ``rhs``                                | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | The second input                                           |
+----------------------------------------+------------------------------------------------------------+
| ``transpose.a``                        | boolean, optional, default=0.                              |
|                                        |                                                            |
|                                        | If true then transpose the first input before dot.         |
+----------------------------------------+------------------------------------------------------------+
| ``transpose.b``                        | boolean, optional, default=0.                              |
|                                        |                                                            |
|                                        | If true then transpose the second input before dot.        |
+----------------------------------------+------------------------------------------------------------+
| ``forward.stype``                      | {None, 'csr', 'default', 'row_sparse'},optional,           |
|                                        | default='None'.                                            |
|                                        |                                                            |
|                                        | The desired storage type of the forward output given by    |
|                                        | user, if thecombination of input storage types and this    |
|                                        | hint does not matchany implemented ones, the dot operator  |
|                                        | will perform fallback operationand still produce an output |
|                                        | of the desired storage                                     |
|                                        | type.                                                      |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.ndarray


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/master/src/operator/tensor/dot.cc#L125


.. disqus::
   :disqus_identifier: mx.nd.batch.dot
